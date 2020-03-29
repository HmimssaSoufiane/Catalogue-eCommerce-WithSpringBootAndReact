package com.hmimssa.catalogue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hmimssa.catalogue.dao.DaoClient;
import com.hmimssa.catalogue.model.Client;

@RequestMapping("/API/Client")
public class ClientController {

	@Autowired
	DaoClient daoClient;

	@GetMapping("/clients")
	public Iterable<Client> findAllArticles() {
		return daoClient.findAll();
	}

	@GetMapping("/clientById/{id}")
	public Client findClientById(@PathVariable int id) {
		return daoClient.findById(id).orElse(null);
	}

	@GetMapping("/clientByEmail/{email}")
	public Client findClientByEmail(@PathVariable String email) {
		return daoClient.findByEmail(email);
	}

}