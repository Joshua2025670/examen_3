package com.upiiz.examen_3.Controllers;

import com.upiiz.examen_3.Entities.MascotaEnitity;
import com.upiiz.examen_3.Services.MascotaServImp;
import org.aspectj.weaver.AjAttribute;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("mascotas")
public class MascotaController {
    @Autowired
    private MascotaServImp mascotaServImp;

    @GetMapping
    public String Mascotas(){
        return "tables";
    }

    @GetMapping("/api/mascotas")
    @ResponseBody
    public ResponseEntity<List<MascotaEnitity>> listado(){
        return ResponseEntity.ok(mascotaServImp.listar());
    }

    @PostMapping("/api/mascotas")
    @ResponseBody
    public ResponseEntity<MascotaEnitity> guardarMasc(@RequestBody MascotaEnitity mascotaEnitity){
        return ResponseEntity.ok(mascotaServImp.nuevaMasc(mascotaEnitity));
    }

    @PatchMapping("/api/mascotas/{id}")
    @ResponseBody
    public ResponseEntity<MascotaEnitity> actualizarMasc(@PathVariable Long id, @RequestBody MascotaEnitity mascotaEnitity){
        return ResponseEntity.ok(mascotaServImp.editarMasc(id, mascotaEnitity));
    }

    @DeleteMapping("/api/mascotas/{id}")
    @ResponseBody
    public void eliminarMasc(@PathVariable Long id){
        mascotaServImp.eliminarMasc(id);
    }

    @GetMapping("api/mascotas/{id}")
    @ResponseBody
    public ResponseEntity<Optional<MascotaEnitity>> buscarPid(@PathVariable Long id){
        return ResponseEntity.ok(mascotaServImp.bucarPid(id));
    }
}
