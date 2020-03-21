package com.hmimssa.catalogue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hmimssa.catalogue.dao.DaoClient;
import com.hmimssa.catalogue.model.Client;
@RestController
@RequestMapping("/API/Inscription")
public class InscriptionController {

	@Autowired
	DaoClient daoClient;

	@PostMapping(path="/add") // Map ONLY POST Requests
	public @ResponseBody String addNewUser(@RequestBody Client client) {
		
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		if (client != null) {
			daoClient.save(client);
			return "Saved";
		}

		return "Errur";
	}

}
