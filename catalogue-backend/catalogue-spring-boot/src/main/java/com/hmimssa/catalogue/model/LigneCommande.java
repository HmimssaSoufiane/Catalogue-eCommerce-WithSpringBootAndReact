package com.hmimssa.catalogue.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//is a ligne commande non valide en mode panier

@Entity
public class LigneCommande implements Comparable<LigneCommande> {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int idLigneCommande;

    //protected LigneCommandePK ligneCommandePK;

	@ManyToOne
	@JoinColumn(name = "numCommande",insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	@JsonIgnoreProperties("lignesCommande")
	private Commande commande;

	@ManyToOne
	@JoinColumn(name = "codeArticle",insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	@JsonIgnoreProperties("lignesCommande")
	private Article article;

	private int qteCde;

	public LigneCommande() {
		super();
	}

	public LigneCommande(int idLigneCommande, Commande commande, Article article, int qteCde) {
		super();
		this.idLigneCommande = idLigneCommande;
		this.commande = commande;
		this.article = article;
		this.qteCde = qteCde;
	}

	public int getIdLigneCommande() {
		return idLigneCommande;
	}



	public void setIdLigneCommande(int idLigneCommande) {
		this.idLigneCommande = idLigneCommande;
	}



	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}

	public Commande getCommande() {
		return commande;
	}

	public void setCommande(Commande commande) {
		this.commande = commande;
	}

	public int getQteCde() {
		return qteCde;
	}

	public void setQteCde(int qteCde) {
		this.qteCde = qteCde;
	}

	@Override
	public int compareTo(LigneCommande o) {
		if (this.getIdLigneCommande() != o.getIdLigneCommande())
			return 1;
		return 0;
	}





}
