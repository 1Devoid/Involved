function toggleInviteButton() {
  const inviteButton = document.getElementById('existing-user-invite');
  const checkboxes = document.querySelectorAll(
    'input[data-checkbox="users"], input[data-checkbox="master"]'
  );

  if (inviteButton && checkboxes.length) {
    const updateButtonState = () => {
      const isChecked = Array.from(checkboxes).some(
        (checkbox) => checkbox.checked
      );

      if (isChecked) {
        inviteButton.removeAttribute('disabled');
        inviteButton.classList.remove('opacity-70');
        inviteButton.classList.add(
          'hover:bg-blue-800',
          'dark:hover:bg-blue-700'
        );
      } else {
        inviteButton.setAttribute('disabled', 'true');
        inviteButton.classList.add('opacity-70');
        inviteButton.classList.remove(
          'hover:bg-blue-800',
          'dark:hover:bg-blue-700'
        );
      }
    };

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', updateButtonState);
    });

    updateButtonState();
  }
}

export default toggleInviteButton;
