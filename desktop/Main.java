import javax.swing.*;
import java.awt.*;
import java.util.Arrays;

public class Main {
    private JFrame frame;
    public String pass;
    String checkUsr;
    private boolean checked = false;

    public void initialize() {
        frame = new JFrame("Farm_Name");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(600, 600);
        frame.setLocationRelativeTo(null);
        frame.setLayout(null);
        frame.setBackground(Color.WHITE);

        JLabel userName = new JLabel("User Name  : ");
        userName.setBounds(200, 210, 100, 30);
        JTextField name = new JTextField();
        name.setBounds(310, 210, 100, 30);
        JLabel password = new JLabel("Password  : ");
        password.setBounds(200, 250, 100, 30);
        JPasswordField passwordField = new JPasswordField();
        passwordField.setBounds(310, 250, 100, 30);
        JButton signIn = new JButton("Sign in");
        signIn.setBounds(310, 300, 100, 30);

        signIn.addActionListener(e -> {
            pass = new String(passwordField.getPassword()); // Convert char[] to String
            checkUsr = name.getText();
            if (pass.equals("1234") && checkUsr.equals("Doaa")) {
                checked = true;
                launchDemo();
            } else {
                JOptionPane.showMessageDialog(frame, "Wrong password, try again..");
            }
        });

        frame.add(userName);
        frame.add(name);
        frame.add(password);
        frame.add(passwordField);
        frame.add(signIn);

        frame.setVisible(true);
    }

    private void launchDemo() {
        frame.dispose(); // Close login window
        SwingUtilities.invokeLater(() -> {
            try {
                new AG_pro().initialize();
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    public static void main(String[] args) {
        Main app = new Main();
        app.initialize();
    }
}