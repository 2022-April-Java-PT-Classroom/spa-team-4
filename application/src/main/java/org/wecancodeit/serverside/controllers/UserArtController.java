package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.UserArt;
import org.wecancodeit.serverside.repositories.UserArtRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserArtController {

    @Resource
    private UserArtRepository userArtRepo;

    @GetMapping("/gallery")
    public Collection<UserArt> getUserArt() {
        return (Collection<UserArt>) userArtRepo.findAll();
    }

    @PostMapping("/gallery/add-art")
    public Collection<UserArt> addUserArt(@RequestBody String body) throws JSONException {
        JSONObject newUserArt = new JSONObject(body);
        String artistName = newUserArt.getString("artistName");
        String artTitle = newUserArt.getString("artTitle");
        String artDesc = newUserArt.getString("artDesc");
        String artUrl = newUserArt.getString("artUrl");

        return (Collection<UserArt>) userArtRepo.findAll();
    }

}
