package com.hmimssa.catalogue.model;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

@Entity
@Table(name="categories")
public class Categorie {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int refCat;
	private String cat;
	@OneToMany(mappedBy = "codeArticle",fetch = FetchType.LAZY)
	@NotFound(action = NotFoundAction.IGNORE)
	private Collection<Article> articles;
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
	public void setRefCat(int refCat) {
		this.refCat = refCat;
	}
	public String getCat() {
		return cat;
	}
	public void setCat(String cat) {
		this.cat = cat;
	}

	
}
