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
        UserArt test = new UserArt("john ", "title1", "Landscape", "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        userArtRepo.save(test);
    }
}
