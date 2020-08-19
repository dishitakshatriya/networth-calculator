package com.example.demo.services;
import java.util.List;
import java.util.Optional;

import com.example.demo.models.Networth;

public interface NetworthService {
	public List<Networth> getNetworth();	  
	public Networth saveNetworth(Networth networth);
	public Optional<Networth> getNetworthById(Long id);
}
