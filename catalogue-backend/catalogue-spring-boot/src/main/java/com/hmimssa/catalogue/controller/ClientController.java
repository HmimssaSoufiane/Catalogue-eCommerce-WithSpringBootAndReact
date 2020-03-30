package com.hmimssa.catalogue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hmimssa.catalogue.dao.DaoClient;
import com.hmimssa.catalogue.model.Client;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/API/Client")
public class ClientController {

	@Autowired
	DaoClient daoClient;

	@GetMapping("/clients")
	public @ResponseBody Iterable<Client> findAllArticles() {
		return daoClient.findAll();
	}

	@GetMapping("/clientById/{id}")
	public Client findClientById(@PathVariable int id) {
		return daoClient.findById(id).orElse(null);
	}
	// SignIn
	@GetMapping("/signIn")
	public @ResponseBody Client findClientByEmail(@RequestBody Client client) {
		Client _client = daoClient.findByEmail(client.getEmail());
		if(_client.getMotPasse().equals(client.getMotPasse()))
				return _client;
		
		return null;
	}
	//SignUp
	@PostMapping(path="/signUp") 
	public @ResponseBody String addNewUser(@RequestBody Client client) {
	
		if (client != null) {
			daoClient.save(client);
			return "Saved";
		}

		return "Errur";
	}

}