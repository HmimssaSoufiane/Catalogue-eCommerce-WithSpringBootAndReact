package com.hmimssa.catalogue.model;

import java.util.Date;
import java.util.SortedMap;
import java.util.TreeMap;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapKey;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

@Entity
public class Commande {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int numCommande;
	private Date dateCommande;
	private String etat;
	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="codeClient")
	private Client client;
	
	@OneToMany(mappedBy = "commande")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	@MapKey(name = "article")
	private SortedMap<Article, LigneCommande> detailsCommandes = new TreeMap<>();

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
