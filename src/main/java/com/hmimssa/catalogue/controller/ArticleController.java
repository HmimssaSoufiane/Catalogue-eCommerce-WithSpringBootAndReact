package com.hmimssa.catalogue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hmimssa.catalogue.dao.DaoArticle;
import com.hmimssa.catalogue.model.Article;

@Controller
public class ArticleController {
	@Autowired
	DaoArticle daoArticle;
	
	@RequestMapping("/Articles")
	public @ResponseBody Iterable<Article> getArticles() {
		return daoArticle.findAll();
	}
}
