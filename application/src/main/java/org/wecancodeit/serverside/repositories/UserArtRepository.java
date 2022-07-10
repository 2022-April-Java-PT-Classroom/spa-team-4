package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.UserArt;

import java.util.Optional;

public interface UserArtRepository extends CrudRepository<UserArt, Long> {
    Optional<UserArt> findByName(String artistName);
}
