Feature: Redirection Test

Scenario: A not logged in user which knows the urls, tries to access the friend-list view
  Given A not logged in user
  When Tries to access the URL
  Then The user meets the welcome page