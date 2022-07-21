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

    @PostMapping("/api/gallery/add-art")
    public Collection<UserArt> addUserArt(@RequestBody String body) throws JSONException {
        JSONObject newUserArt = new JSONObject(body);
        String artistName = newUserArt.getString("artistName");
        String artTitle = newUserArt.getString("artTitle");
        String artDesc = newUserArt.getString("artDesc");
        String artUrl = newUserArt.getString("artUrl");

        //Optional<UserArt> userArtToAddOpt = userArtRepo.findByName(artTitle);
        //add UserArt if his title not already exist in the database (so to avoid repeating titles)
       // if (userArtToAddOpt.isEmpty()) {
            UserArt userArtToAdd = new UserArt(artistName, artTitle, artDesc, artUrl);
            userArtRepo.save(userArtToAdd);
       // }

        return (Collection<UserArt>) userArtRepo.findAll();
    }

}
