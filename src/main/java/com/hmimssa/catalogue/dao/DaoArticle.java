package com.hmimssa.catalogue.dao;


import org.springframework.data.repository.CrudRepository;

import com.hmimssa.catalogue.model.Article;

public interface DaoArticle extends CrudRepository<Article, Integer> {
	
}
