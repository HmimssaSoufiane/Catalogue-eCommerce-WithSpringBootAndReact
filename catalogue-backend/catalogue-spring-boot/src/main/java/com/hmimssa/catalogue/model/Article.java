package com.hmimssa.catalogue.model;

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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Article implements Comparable<Article> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int codeArticle;
	private String titre;
	private String auteur;
	private float prix;
	private int stock;
	@ManyToOne
	@JoinColumn(name="categorie")
	@JsonIgnoreProperties("articles")
	private Categorie categorie;
	
	private byte[] photo;
	
	@OneToMany(mappedBy = "article", orphanRemoval = true)
	@Cascade(value = { CascadeType.ALL })
	@JsonIgnoreProperties("article")
	private Set<LigneCommande> lignesCommande = new TreeSet<>();

	public Article() {
		super();
	}
	

	public Article(int codeArticle, String titre, String auteur, float prix, int stock, Categorie categorie,
			byte[] photo) {
		super();
		this.codeArticle = codeArticle;
		this.titre = titre;
		this.auteur = auteur;
		this.prix = prix;
		this.stock = stock;
		this.categorie = categorie;
		this.photo = photo;
	}


	public int getCodeArticle() {
		return codeArticle;
	}

	public void setCodeArticle(int codeArticle) {
		this.codeArticle = codeArticle;
	}



	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getAuteur() {
		return auteur;
	}

	public void setAuteur(String auteur) {
		this.auteur = auteur;
	}

	public Set<LigneCommande> getLignesCommande() {
		return lignesCommande;
	}


	public void setLignesCommande(Set<LigneCommande> lignesCommande) {
		this.lignesCommande = lignesCommande;
	}


	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public Categorie getCategorie() {
		return categorie;
	}

	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}

	public byte[] getPhoto() {
		return photo;
	}

	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}


	@Override
	public int compareTo(Article o) {
		if (this.getCodeArticle() != o.getCodeArticle())
			return 1;
		return 0;
	}


	
}
