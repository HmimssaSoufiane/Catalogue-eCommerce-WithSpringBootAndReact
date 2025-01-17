package com.hmimssa.catalogue.model;

import java.util.Date;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Commande implements Comparable<Commande>{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer numCommande;
	private Date dateCommande;
	private String etat;
	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="codeClient")
	@JsonIgnoreProperties("commandes")
	private Client client;
	
	@OneToMany(mappedBy = "commande")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	@JsonIgnoreProperties("commande")
	private Set<LigneCommande> lignesCommande = new TreeSet<>();

	public Commande() {
		super();
	}
	public Commande( Client client, Date dateCommande, String etat) {

		this.client = client;
		this.dateCommande = dateCommande;
		this.etat = etat;
	}


	public Commande(Integer numCommande, Client client, Date dateCommande, String etat) {
		super();
		this.numCommande = numCommande;
		this.client = client;
		this.dateCommande = dateCommande;
		this.etat = etat;
	}

	public Set<LigneCommande> getLignesCommande() {
		return lignesCommande;
	}
	
	public void setLignesCommande(Set<LigneCommande> lignesCommande) {
		this.lignesCommande = lignesCommande;
	}
	
	public int getNumCommande() {
		return numCommande;
	}

	public void setNumCommande(Integer numCommande) {
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

	@Override
	public int compareTo(Commande o) {
		return this.numCommande.compareTo(o.getNumCommande());
	}




}
