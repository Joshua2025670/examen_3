package com.upiiz.examen_3.Services;

import com.upiiz.examen_3.Entities.MascotaEnitity;
import com.upiiz.examen_3.Repositories.MascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MascotaServImp implements MascotaServ{
    @Autowired
    private MascotaRepository mascota;

    @Override
    public List<MascotaEnitity> listar() {
        return mascota.findAll();
    }

    @Override
    public MascotaEnitity nuevaMasc(MascotaEnitity mascotaEnitity) {
        return mascota.save(mascotaEnitity);
    }

    @Override
    public MascotaEnitity editarMasc(Long id, MascotaEnitity mascotaEnitity) {
        mascotaEnitity.setId(id);
        return mascota.save(mascotaEnitity);
    }

    @Override
    public Optional<MascotaEnitity> bucarPid(Long id) {
        return mascota.findById(id);
    }

    @Override
    public void eliminarMasc(Long id) {
        mascota.deleteById(id);
    }
}
