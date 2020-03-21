package com.hmimssa.catalogue.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

//is a ligne commande non valide en mode panier

@Entity
public class LigneCommande {
	@EmbeddedId
    protected LigneCommandePK ligneCommandePK;

	@ManyToOne
	@JoinColumn(name = "numCommande",insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	private Commande commande;

	@ManyToOne
	@JoinColumn(name = "codeArticle",insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	private Article article;

	private int qteCde;

	public LigneCommande() {
		super();
	}

	public LigneCommande(Commande commande, Article article, int qteCde) {
		super();
		this.commande = commande;
		this.article = article;
		this.qteCde = qteCde;
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

}
