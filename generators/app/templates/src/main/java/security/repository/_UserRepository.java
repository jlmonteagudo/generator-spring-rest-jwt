package <%= packageName %>.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import <%= packageName %>.security.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
