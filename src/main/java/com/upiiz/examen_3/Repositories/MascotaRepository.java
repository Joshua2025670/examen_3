package com.upiiz.examen_3.Repositories;

import com.upiiz.examen_3.Entities.MascotaEnitity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MascotaRepository extends JpaRepository<MascotaEnitity, Long> {
}
