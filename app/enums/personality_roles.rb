class PersonalityRoles < Inum::Base
  define :GUEST, 0
  define :EDITOR, 30
  define :REVIEWER, 80
  define :SECRET, 90
  define :ADMIN, 99
end
