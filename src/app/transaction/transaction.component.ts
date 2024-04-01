import { Component } from '@angular/core';
import Web3 from 'web3';

interface PackValues {
  [key: string]: number; // Signature d'index pour indiquer que les clés sont de type string et les valeurs sont de type number
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  web3: Web3;
  packValues: PackValues = {
    'VIP': 10,
    'Gold': 5,
    'Silver': 3
  };

  constructor() {
    // Initialiser Web3.js
    this.web3 = new Web3(window.ethereum);

    // Activer Metamask
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(() => {
      // Metamask est activé, votre application peut maintenant interagir avec le réseau Ethereum via Web3.js
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
    const fromAddress = accounts[0]; // Utilisez le premier compte disponible

    const value = this.packValues[packType];

    if (!value) {
      console.error('Valeur du pack non définie');
      return;
    }

    try {
      const transactionHash = await this.web3.eth.sendTransaction({
        from: fromAddress,
        to: '0x6E54583cBf493b82877b14a2359002d3404e742b', // Adresse de destination
        value: this.web3.utils.toWei(value.toString(), 'ether')
      });
      console.log('Transaction Hash:', transactionHash);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la transaction:', error);
    }
  }
}
