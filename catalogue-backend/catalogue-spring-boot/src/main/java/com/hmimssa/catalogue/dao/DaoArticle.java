package com.hmimssa.catalogue.dao;


import org.springframework.data.repository.CrudRepository;

import com.hmimssa.catalogue.model.Article;
import com.hmimssa.catalogue.model.Categorie;
 
public interface DaoArticle extends CrudRepository<Article, Integer> {
	public Iterable<Article> findByCategorie(Categorie categorie);

}
