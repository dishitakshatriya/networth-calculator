package com.example.demo.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Networth;
import com.example.demo.repositories.NetworthRepository;
import com.example.demo.services.NetworthService;

@Service
public class NetworthServiceImpl implements NetworthService{
	@Autowired
	private NetworthRepository networthRepository;
	
	public Optional<Networth> getNetworthById(Long id) {
		return networthRepository.findById(id);
	}

	@Override
	public List<Networth> getNetworth() {
		List<Networth> list = networthRepository.findAll();
		return list;
	}

	@Override
	public Networth saveNetworth(Networth networth) {
		Networth n = networthRepository.save(networth);
		return n;
	}
}
