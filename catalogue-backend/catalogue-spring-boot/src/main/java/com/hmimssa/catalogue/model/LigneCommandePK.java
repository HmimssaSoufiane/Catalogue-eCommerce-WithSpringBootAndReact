package com.hmimssa.catalogue.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;

@SuppressWarnings("serial")
@Embeddable
public class LigneCommandePK implements Serializable {
    @Basic(optional = false)
    @Column(name = "numCommande")
    private int numCommande;
    @Basic(optional = false)
    @Column(name = "codeArticle")
    private int codeArticle;
    
    
	public LigneCommandePK() {
	}
	public LigneCommandePK(int numCommande, int codeArticle) {
		super();
		this.numCommande = numCommande;
		this.codeArticle = codeArticle;
	}
	public int getNumCommande() {
		return numCommande;
	}
	public void setNumCommande(int numCommande) {
		this.numCommande = numCommande;
	}
	public int getCodeArticle() {
		return codeArticle;
	}
	public void setCodeArticle(int codeArticle) {
		this.codeArticle = codeArticle;
	}
    
}