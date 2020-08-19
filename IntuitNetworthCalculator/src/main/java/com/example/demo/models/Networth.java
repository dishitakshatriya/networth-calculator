package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Networth {
	@Id
	@GeneratedValue
	private Long id;
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	private double asset;
	private double liability;
	private double totalNetworth;
	private boolean flag;
	private double value;
	private double value2;

	public Networth() {
	}

	public Networth(Long id, double asset, double liability, double totalNetworth, boolean flag, double value,
			double value2) {
		super();
		this.id = id;
		this.asset = asset;
		this.liability = liability;
		this.totalNetworth = totalNetworth;
		this.flag = flag;
		this.value = value;
		this.value2 = value2;
	}

	public double getValue2() {
		return value2;
	}

	public void setValue2(double value2) {
		this.value2 = value2;
	}

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}

	public double getValue() {
		return value;
	}

	public void setValue(double value) {
		this.value = value;
	}

	public double getAsset() {
		return asset;
	}

	public void setAsset(double asset) {
		this.asset = asset;
	}

	public double getLiability() {
		return liability;
	}

	public void setLiability(double liability) {
		this.liability = liability;
	}

	public double getTotalNetworth() {
		return totalNetworth;
	}

	public void setTotalNetworth(double totalNetworth) {
		this.totalNetworth = totalNetworth;
	}

}
