package <%= packageName %>;

import org.springframework.data.jpa.repository.JpaRepository;

public interface <%= resourceName %>Repository extends JpaRepository<<%= resourceName %>, Long> {
    //User findByUsername(String username);
}
