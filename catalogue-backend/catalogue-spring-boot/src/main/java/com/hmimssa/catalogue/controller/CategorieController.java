package com.hmimssa.catalogue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hmimssa.catalogue.dao.DaoCategorie;
import com.hmimssa.catalogue.model.Categorie;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/API/Categorie")
public class CategorieController {
	@Autowired
	DaoCategorie daoCategorie;
	@GetMapping(path="/Categories")
	public @ResponseBody Iterable<Categorie> getCategories() {
		return daoCategorie.findAll();
	}
}
