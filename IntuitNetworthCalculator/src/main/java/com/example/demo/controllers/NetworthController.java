package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mapping.AccessOptions.GetOptions.GetNulls;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Networth;
import com.example.demo.services.NetworthService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class NetworthController {
	private double total=0;
	private double asset=0;
	private double liability=0;
	private long localId;
	
	@Autowired
	private NetworthService networthService;

	public void setNetworthService(NetworthService networthService) {
		this.networthService = networthService;
	}

	@GetMapping("api/form/{id}")
	public double getForm(@PathVariable Long id) {
		id = localId;
		Optional<Networth> n = networthService.getNetworthById(id);
		return n.get().getTotalNetworth();
	}
	
	
	@PostMapping("api/form")
	public Networth createRecord(@RequestBody Networth networth) {
		if (networth.isFlag()) {
			asset = asset + networth.getValue();
			networth.setAsset(asset);
			networth.setLiability(liability);
			total = total + networth.getValue();
			networth.setTotalNetworth(total);
		} else {
			liability = liability + networth.getValue();
			networth.setAsset(asset);
			networth.setLiability(liability);
			total = total - networth.getValue();
			networth.setTotalNetworth(total);
		}
		Networth n =  networthService.saveNetworth(networth);
		localId = n.getId();
		return n;
	}

	/*@PostMapping("api/form")
	public Networth createRecord(@RequestBody Networth networth) {
		if (networth.isFlag()) {
			asset = asset + networth.getValue();
			networth.setAsset(asset);
			networth.setLiability(liability);
			total = total + networth.getValue();
			networth.setTotalNetworth(total);
		} else {
			liability = liability + networth.getValue();
			networth.setAsset(asset);
			networth.setLiability(liability);
			total = total - networth.getValue();
			networth.setTotalNetworth(total);
		}
		Networth n =  networthService.saveNetworth(networth);
		localId = n.getId();
		return n;
	}*/

	@PutMapping("api/form")
	public Networth updateRecord(@RequestBody Networth networth) {
		if (networth.isFlag()) {
			asset = asset + networth.getValue();
			networth.setAsset(asset);
			networth.setLiability(liability);
			total = total + networth.getValue();
			networth.setTotalNetworth(total);
		} else {
			liability = liability + networth.getValue();
			networth.setAsset(asset);
			networth.setLiability(liability);
			total = total - networth.getValue();
			networth.setTotalNetworth(total);
		}
		Networth n =  networthService.saveNetworth(networth);
		localId = n.getId();
		return n;
	}
}
