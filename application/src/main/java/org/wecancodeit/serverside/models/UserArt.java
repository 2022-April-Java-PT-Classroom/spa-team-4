package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserArt {

    @Id
    @GeneratedValue
    private Long id;

    private String artistName;
    private String artTitle;
    private String artDesc;
    private String artUrl;

    public Long getId() {
        return id;
    }

    public String getArtistName() {
        return artistName;
    }

    public String getArtTitle() {
        return artTitle;
    }

    public String getArtDesc() {
        return artDesc;
    }

    public String getArtUrl() {
        return artUrl;
    }

    public UserArt(){}

    public UserArt(String artistName, String artTitle, String artDesc, String artUrl) {
        this.artistName = artistName;
        this.artTitle = artTitle;
        this.artDesc = artDesc;
        this.artUrl = artUrl;
    }
}
