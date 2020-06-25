package com.hmimssa.catalogue.controller;

import java.util.Date;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hmimssa.catalogue.dao.DaoArticle;
import com.hmimssa.catalogue.dao.DaoClient;
import com.hmimssa.catalogue.dao.DaoLigneCommande;
import com.hmimssa.catalogue.model.Article;
import com.hmimssa.catalogue.model.Client;
import com.hmimssa.catalogue.model.Commande;
import com.hmimssa.catalogue.model.LigneCommande;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/API/Client")
public class ClientController {

	@Autowired
	DaoClient daoClient;
	@Autowired
	DaoClient daoCommande;
	@Autowired
	DaoArticle daoArticle;
	@Autowired
	DaoLigneCommande daoLigneCommande;


	@GetMapping("/clients")
	public @ResponseBody Iterable<Client> findAllArticles() {
		return daoClient.findAll();
	}

	@GetMapping("/clients/{id}")
	public Client findClientById(@PathVariable int id) {
		return daoClient.findById(id).orElse(null);
	}
	
	@PutMapping("/clients/{idClient}/{idArticle}")
	public Client updateClientAddCommand(@PathVariable int idClient,@PathVariable int idArticle) {
		Client client = daoClient.findById(idClient).orElse(null);

		if (client != null) {
			
			Article article = daoArticle.findById(idArticle).orElse(null);
			Set<Commande> commandes = client.getCommandes();
			
			Commande commande = commandes.stream().filter(cmd -> "panier".equals(cmd.getEtat()))
			  .findAny()
			  .orElse(new Commande(-1,client,new Date(),"panier"));
			
			client.getCommandes().remove(commande);

			
			LigneCommande ligneCommande=new LigneCommande(commande,article,1);
			
			commande.getDetailsCommandes().add(ligneCommande);
			article.getDetailsCommandes().add(ligneCommande);
			client.getCommandes().add(commande);
			
			daoClient.save(client);

			return client;
		}

		return null;
	}
	
	
	// SignIn
	@PostMapping("/signIn")
	public  Client findClientByEmail(@RequestBody Client client) {
		if (client.getMotPasse() != null && client.getEmail() != null) {
			Client _client = daoClient.findByEmail(client.getEmail());
			if (_client.getMotPasse().equals(client.getMotPasse()))
				return _client;
		}
		return null;
	}

	// SignUp
	@PostMapping(path = "/signUp")
	public  String addNewUser(@RequestBody Client client) {

		if (client != null) {
			daoClient.save(client);
			return "Saved";
		}

		return null;
	}

}