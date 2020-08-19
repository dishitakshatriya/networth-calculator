package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Networth;

@Repository
public interface NetworthRepository extends JpaRepository<Networth, Long>{

}
