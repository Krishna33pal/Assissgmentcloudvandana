import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {

        Set<Character> alphabetSet = new HashSet<>();

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String userInput = scanner.nextLine().toLowerCase();

        for (char ch : userInput.toCharArray()) {
            if (Character.isAlphabetic(ch)) {
                alphabetSet.add(ch);
            }
        }

        boolean isPangram = alphabetSet.size() == 26;

        if (isPangram) {
            System.out.println("The is a pangram sentence.");
        } else {
            System.out.println("The is Not pangram Sentence.");
        }

        scanner.close();
    }
}
