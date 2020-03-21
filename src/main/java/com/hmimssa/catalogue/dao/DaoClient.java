package com.hmimssa.catalogue.dao;

import org.springframework.data.repository.CrudRepository;

import com.hmimssa.catalogue.model.Client;

public interface DaoClient extends CrudRepository<Client, Integer> {


}
