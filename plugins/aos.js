import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default ({ app }) => {
  app.router.afterEach(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  });
};
