package com.hmimssa.catalogue.dao;

import org.springframework.data.repository.CrudRepository;

import com.hmimssa.catalogue.model.LigneCommande;

public interface DaoLigneCommande extends CrudRepository<LigneCommande, Integer>{
	
	
}
