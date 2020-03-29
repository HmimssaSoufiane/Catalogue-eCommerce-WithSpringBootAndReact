package com.hmimssa.catalogue.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.hmimssa.catalogue.dao.DaoArticle;
import com.hmimssa.catalogue.model.Article;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/API/Article")
public class ArticleController {

	@Autowired
	DaoArticle daoArticle;

	@GetMapping(path = "/articles")
	public @ResponseBody Iterable<Article> getArticles() {
		return daoArticle.findAll();
	}

	@PostMapping(path = "/addArticle") // Map ONLY POST Requests
	public @ResponseBody String addNewUser(@RequestBody Article article) {

		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		if (article != null) {
			daoArticle.save(article);
			return "Saved";
		}
		return "Errur";
	}

	@GetMapping(path = "/addArticle/{id}")
	public @ResponseBody Optional<Article> getArticle(@PathVariable int id) {
		return daoArticle.findById(id);
	}

	@GetMapping("/article/{id}")
	public Article findArticleById(@PathVariable int id) {
		return daoArticle.findById(id).orElse(null);
	}

	@DeleteMapping("/deleteArticle/{id}")
	public String deleteArticle(@PathVariable int id) {
		 daoArticle.deleteById(id);
		 return "Done";
	}
}
