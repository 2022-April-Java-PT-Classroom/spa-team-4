package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.UserArt;
import org.wecancodeit.serverside.repositories.UserArtRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private UserArtRepository userArtRepo;

    @Override
    public void run(String... args) throws Exception {
        UserArt jasonArt = new UserArt("Jason Mirwald", "title1", "artDesc", "artUrl");
        userArtRepo.save(jasonArt);
    }
}
