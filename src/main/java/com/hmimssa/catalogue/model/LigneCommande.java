package com.hmimssa.catalogue.model;

//is a ligne commande non valide en mode panier
public class LigneCommande {

	private Article article;
	private Commande commande;
	private int qteCde;

	public LigneCommande() {
		super();
	}

	public LigneCommande( Commande commande,Article article, int qteCde) {
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
