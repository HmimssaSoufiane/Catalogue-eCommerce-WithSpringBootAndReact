package com.hmimssa.catalogue.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.hmimssa.catalogue.dao.DaoLigneCommande;
import com.hmimssa.catalogue.model.LigneCommande;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/API/LigneCommande")
public class LigneCommandeController {

	@Autowired
	DaoLigneCommande daoLigneCommande;

	@GetMapping("/ligneCommandes")
	public @ResponseBody Iterable<LigneCommande> findAllLigneCommandes() {
		return daoLigneCommande.findAll();
	}

	@GetMapping("/ligneCommandes/{id}")
	public LigneCommande findLigneCommandesById(@PathVariable int id) {
		return daoLigneCommande.findById(id).orElse(null);
	}

	@DeleteMapping("/ligneCommandes/{id}")
	public void deleteLigneCommandesById(@PathVariable int id) {
		daoLigneCommande.deleteById(id);
	}

}
