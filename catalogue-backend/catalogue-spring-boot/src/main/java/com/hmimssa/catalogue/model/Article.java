package com.hmimssa.catalogue.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
public class Article {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int codeArticle;
	private String designation;
	private float prix;
	private int stock;
	@ManyToOne
	@JoinColumn(name="categorie")
	private Categorie categorie;
	private byte[] photo;
	
	@OneToMany(mappedBy = "article", orphanRemoval = true)
	@Cascade(value = { CascadeType.ALL })
	private Set<LigneCommande> detailsCommandes = new HashSet<>();

	public Article() {
		super();
	}

	public Article(int codeArticle, String designation, float prix, int stock, Categorie categorie, byte[] photo) {
		super();
		this.codeArticle = codeArticle;
		this.designation = designation;
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

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
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
}
