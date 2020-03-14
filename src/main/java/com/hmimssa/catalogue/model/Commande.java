package com.hmimssa.catalogue.model;

import java.util.Date;

public class Commande {
	private int numCommande;
	private Client client;	
	private Date dateCommande;
	private String etat;
	
	public Commande() {
		super();
	}
	
	public Commande(int numCommande, Client client, Date dateCommande, String etat) {
		super();
		this.numCommande = numCommande;
		this.client = client;
		this.dateCommande = dateCommande;
		this.etat = etat;
	}
	public int getNumCommande() {
		return numCommande;
	}
	public void setNumCommande(int numCommande) {
		this.numCommande = numCommande;
	}
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	public Date getDateCommande() {
		return dateCommande;
	}
	public void setDateCommande(Date dateCommande) {
		this.dateCommande = dateCommande;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
 
}
