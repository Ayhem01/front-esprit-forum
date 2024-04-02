import { Component, ViewChild, ElementRef } from '@angular/core';
import Web3 from 'web3';
//@ts-ignore
import QRCode from 'qrcode';

interface PackValues {
  [key: string]: number;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  @ViewChild('qrCode', { static: true }) qrCodeElement!: ElementRef;

  web3: Web3;
  packValues: PackValues = {
    'VIP': 10,
    'Gold': 5,
    'Silver': 3
  };
  qrCodeUrl: string = '';


  constructor() {
    this.web3 = new Web3(window.ethereum);
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(() => {
      console.log('Metamask activé');
    }).catch((error: any) => {
      console.error('Erreur lors de l\'activation de Metamask:', error);
    });
  }

  async buyPack(packType: string) {
    if (!(packType in this.packValues)) {
      console.error('Type de pack non valide');
      return;
    }

    const accounts = await this.web3.eth.getAccounts();
    const fromAddress = accounts[0];

    const value = this.packValues[packType];

    if (!value) {
      console.error('Valeur du pack non définie');
      return;
    }

    try {
      const transactionReceipt = await this.web3.eth.sendTransaction({
        from: fromAddress,
        to: '0x6E54583cBf493b82877b14a2359002d3404e742b',
        value: this.web3.utils.toWei(value.toString(), 'ether')
      });

      // Vérifier si transactionReceipt contient bien un hash de transaction
      if (transactionReceipt.transactionHash) {
        const transactionHash: string = transactionReceipt.transactionHash.toString();
        console.log('Transaction Hash:', transactionHash);
        this.generateQRCode(transactionHash, fromAddress, '0x6E54583cBf493b82877b14a2359002d3404e742b', value);
      } else {
        console.error('La transaction n\'a pas retourné de hash de transaction.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la transaction:', error);
    }
  }

  async generateQRCode(transactionHash: string, fromAddress: string, toAddress: string, value: number) {
    const transactionDetails = {
      transactionHash,
      fromAddress,
      toAddress,
      value
    };
    const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(transactionDetails));
    this.qrCodeElement.nativeElement.src = qrCodeUrl;
  }
}
