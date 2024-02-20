import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AG_pro {
    private JFrame frame;
    private DefaultTableModel tableModel;
    private DefaultTableModel tableModel1;
    private DefaultTableModel tableModel2;

    public void initialize() {
        frame = new JFrame("Agriculture App");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel mainPanel = new JPanel(null);
        mainPanel.setPreferredSize(new Dimension(1300, 1300));

        frame.getContentPane().add(mainPanel);
        frame.pack();
        frame.setVisible(true);

        JPanel topPanel = new JPanel(null);
        JPanel leftPanel = new JPanel(null);

        mainPanel.add(topPanel);
        mainPanel.add(leftPanel);
        mainPanel.setBackground(Color.white);

        topPanel.setBounds(0,0,1500,50);
        leftPanel.setBounds(0,0,150,800);

        topPanel.setBackground(new Color(0X6B,0X8E,0X23));
        leftPanel.setBackground(new Color(0X6B,0X8E,0X23));

        JLabel FarmName = new JLabel("Agriculture application");
        FarmName.setFont(new Font("Arial", Font.BOLD, 18));
        FarmName.setForeground(Color.WHITE);
        FarmName.setBounds(10,10,200,30);
        topPanel.add(FarmName);

        JButton Crops = new JButton("Crops");
        leftPanel.add(Crops);
        Crops.setBounds(10,150,100,30);
        Crops.setBackground(new Color(0X6B,0X8E,0X23));
        Crops.setForeground(Color.WHITE);
        Crops.setBorder(null);
        Crops.setFont(new Font("Arial", Font.BOLD, 18));
        Crops.setBorderPainted(false);

        JButton Sensors = new JButton("Sensors");
        leftPanel.add(Sensors);
        Sensors.setBounds(10,250,100,30);
        Sensors.setBackground(new Color(0X6B,0X8E,0X23));
        Sensors.setForeground(Color.WHITE);
        Sensors.setBorder(null);
        Sensors.setFont(new Font("Arial", Font.BOLD, 18));
        Sensors.setBorderPainted(false);

        JButton FARM = new JButton("FARM");
        leftPanel.add(FARM);
        FARM.setBounds(10,350,100,30);
        FARM.setBackground(new Color(0X6B,0X8E,0X23));
        FARM.setForeground(Color.WHITE);
        FARM.setBorder(null);
        FARM.setFont(new Font("Arial", Font.BOLD, 18));
        FARM.setBorderPainted(false);

        tableModel = new DefaultTableModel(new Object[]{"Sensor ID", "Name", "Type", "Farm ID", "location"}, 0);
        // Create table
        JTable table = new JTable(tableModel);
        table.getTableHeader().setBackground(new Color(0x9A, 0xCA, 0x3C));
        table.setGridColor( Color.LIGHT_GRAY);

        // Set table size
        table.setPreferredScrollableViewportSize(new Dimension(550, 300));

        // Set table row height
        table.setRowHeight(30);

        // Set table font
        table.setFont(new Font("Arial", Font.PLAIN, 14));

        // Create JScrollPane to hold the table
        JScrollPane scrollPane = new JScrollPane(table);
        scrollPane.setBounds(200, 150, 800, 500);
        mainPanel.add(scrollPane);

        scrollPane.setVisible(false);
        table.setVisible(false);



        tableModel1 = new DefaultTableModel(new Object[]{"FARM ID", "Name", "Location"}, 0);
        // Create table
        JTable table1 = new JTable(tableModel1);
        table1.getTableHeader().setBackground(new Color(0x9A, 0xCA, 0x3C));
        table1.setGridColor( Color.LIGHT_GRAY);

        // Set table size
        table1.setPreferredScrollableViewportSize(new Dimension(550, 300));

        // Set table row height
        table1.setRowHeight(30);

        // Set table font
        table1.setFont(new Font("Arial", Font.PLAIN, 14));

        // Create JScrollPane to hold the table
        JScrollPane scrollPane1 = new JScrollPane(table1);
        scrollPane1.setBounds(200, 150, 800, 500);
        mainPanel.add(scrollPane1);

        scrollPane1.setVisible(false);
        table1.setVisible(false);

        tableModel2 = new DefaultTableModel(new Object[] { "ID", "Name" }, 0);
        // Create table
        JTable table2 = new JTable(tableModel2);
        table2.getTableHeader().setBackground(new Color(0x9A, 0xCA, 0x3C));
        table2.setGridColor(Color.LIGHT_GRAY);

        // Set table size
        table2.setPreferredScrollableViewportSize(new Dimension(550, 300));

        // Set table row height
        table2.setRowHeight(30);

        // Set table font
        table2.setFont(new Font("Arial", Font.PLAIN, 14));

        // Create JScrollPane to hold the table
        JScrollPane scrollPane2 = new JScrollPane(table2);
        scrollPane2.setBounds(200, 150, 800, 500);
        mainPanel.add(scrollPane2);

        scrollPane2.setVisible(false);
        table2.setVisible(false);

        // Add data to tableModel2 (table2)
        tableModel2.addRow(new Object[] { "1", "Crop1" });
        tableModel2.addRow(new Object[] { "2", "Crop2" });
        // Add more data as needed
        Crops.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                scrollPane.setVisible(false);
                table.setVisible(false);
                scrollPane1.setVisible(false);
                table1.setVisible(false);
                scrollPane2.setVisible(true);
                table2.setVisible(true);

            }

        });

        // Add data to tableModel (table)
        tableModel.addRow(new Object[] { "1", "Sensor1", "Type1", "Farm1", "Location1" });
        tableModel.addRow(new Object[] { "2", "Sensor2", "Type2", "Farm2", "Location2" });
        // Add more data as needed
        Sensors.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                scrollPane.setVisible(true);
                table.setVisible(true);
                scrollPane1.setVisible(false);
                table1.setVisible(false);
                scrollPane2.setVisible(false);
                table2.setVisible(false);

            }

        });
        // Add data to tableModel1 (table1)
        tableModel1.addRow(new Object[] { "1", "Farm1", "Location1" });
        tableModel1.addRow(new Object[] { "2", "Farm2", "Location2" });
        // Add more data as needed
        FARM.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                scrollPane1.setVisible(true);
                table1.setVisible(true);
                scrollPane.setVisible(false);
                table.setVisible(false);
                scrollPane2.setVisible(false);
                table2.setVisible(false);

            }

        });

    }

}