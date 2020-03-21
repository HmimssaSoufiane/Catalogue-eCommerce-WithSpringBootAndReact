package com.hmimssa.catalogue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hmimssa.catalogue.dao.DaoArticle;
import com.hmimssa.catalogue.model.Article;

@RestController
@RequestMapping("/API/Article")
public class ArticleController {
	@Autowired
	DaoArticle daoArticle;
	
	@GetMapping(path="/Articles")
	public @ResponseBody Iterable<Article> getArticles() {
		return daoArticle.findAll();
	}
}
