package com.upiiz.examen_3.Services;

import com.upiiz.examen_3.Entities.MascotaEnitity;

import java.util.List;
import java.util.Optional;

public interface MascotaServ {
    List<MascotaEnitity> listar();
    MascotaEnitity nuevaMasc(MascotaEnitity mascotaEnitity);
    MascotaEnitity editarMasc(Long id, MascotaEnitity mascotaEnitity);
    Optional<MascotaEnitity> bucarPid(Long id);
    void eliminarMasc(Long id);

}
