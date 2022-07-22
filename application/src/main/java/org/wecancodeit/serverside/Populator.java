package org.wecancodeit.serverside;

import org.apache.catalina.User;
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

        UserArt fingerPaintArt = new UserArt("Billy", "Flowers", "A finger paint portrait of flowers blooming from the grass. Truly a work of art.", "https://images.unsplash.com/photo-1630476504743-a4d342f88760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1595&q=80");
        userArtRepo.save(fingerPaintArt);
        UserArt abstractArt = new UserArt("Mai", "The Chaos", "An abstract piece with varying colors and lines, woven together into one chaotic mess.", "https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80");
        userArtRepo.save(abstractArt);
        UserArt handArt = new UserArt("Tyrone", "Love", "A delicately painted piece of hands and a heart. The secret ingredient is love.", "https://images.unsplash.com/photo-1617080090911-91409e3496ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80");
        userArtRepo.save(handArt);
        UserArt pinkBlueArt = new UserArt("Alejandra", "Drop", "An emotional piece with blue and pink colors and teardrops on the canvas.", "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
        userArtRepo.save(pinkBlueArt);
        UserArt flowerArt = new UserArt("Kevin", "The Beauty of Life", "A piece that's just OK. Not noteworthy in any way.", "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80");
        userArtRepo.save(flowerArt);

    }
}
