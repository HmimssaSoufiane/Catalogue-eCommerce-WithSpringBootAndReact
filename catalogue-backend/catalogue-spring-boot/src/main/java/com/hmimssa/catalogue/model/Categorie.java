package com.hmimssa.catalogue.model;

import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Categorie implements Comparable<Categorie> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int refCat;
	private String cat;

	@OneToMany(mappedBy = "categorie")
	@JsonIgnoreProperties("categorie")
	private Set<Article> articles=new TreeSet<>();

	public Categorie() {
		super();
	}

	public Categorie(int refCat, String cat) {
		super();
		this.refCat = refCat;
		this.cat = cat;
	}

	public int getRefCat() {
		return refCat;
	}
	
	public Set<Article> getArticles() {
		return articles;
	}

	public void setArticles(Set<Article> articles) {
		this.articles = articles;
	}

	public void setRefCat(int refCat) {
		this.refCat = refCat;
	}

	public String getCat() {
		return cat;
	}

	public void setCat(String cat) {
		this.cat = cat;
	}

	@Override
	public int compareTo(Categorie o) {
		if (this.getRefCat() != o.getRefCat())
			return 1;
		return 0;
	}



}
