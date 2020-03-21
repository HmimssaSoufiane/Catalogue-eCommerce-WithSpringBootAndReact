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
}