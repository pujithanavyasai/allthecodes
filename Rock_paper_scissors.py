from random import choice as c
choice = True
while choice:
    play = input('''
            1.Play
            2.Exit/No
            Enter Your Choice: ''')
    if play!= '1':
        choice = False
        if play == '2':
            print('''
                    Game Exited
                ''')
        else: print('''
                    Invalid choice please choose again, run the program again
                    ''')
    else:
        valid_values=['rock', 'paper', 'scissor']
        # answers = ['computer', 'user', 'tie']
        final = []
        computer = 0
        user = 0
        tie = 0
        times = input("How many rounds do you want to play:- ")
        if times.isdigit()==False:
            print('''
                  Invalid input, please enter a number
                  ''')
            break
        else:
            times = int(times)
        for i in range(1,times+1):
            cond = True
            value =c(valid_values)
            user_val = input(''' 
                        1.Rock
                        2.Paper
                        3.Scissor
                        Enter the Number: ''').lower()
            if user_val == '1':
                user_val = 'rock'
            elif user_val == '2':
                user_val = 'paper'
            elif user_val == '3':
                user_val = 'scissor'
            else:
                user_val = "none"

            msg = f''' 
        computer - {value}
        you - {user_val}'''

            if user_val in valid_values:
                if value == user_val:
                    final += [str(i)+':' + 'Tie']
                    tie += 1
                    print(msg)
                    print("        it's a tie")
                else:
                    li = [user_val , value]
                    if ('rock' in li) and ('paper' in li):
                        if user_val == 'paper':
                            final += [str(i)+':' + 'You']
                            user += 1
                            print(msg)
                            print("        You win")
                        else: 
                            final += [str(i)+':' + 'Computer']
                            computer += 1
                            print(msg)
                            print("        Computer wins")
                    elif ('rock' in li) and ('scissor' in li):
                        if user_val == 'rock':
                            final += [str(i)+':' + 'You']
                            user += 1
                            print(msg)
                            print("        You win")
                        else: 
                            final += [str(i)+':' + 'Computer']
                            computer += 1
                            print(msg)
                            print("        Computer wins")
                    elif ('paper' in li) and ('scissor' in li):
                        if user_val == 'scissor':
                            final += [str(i)+':' + 'You']
                            user += 1
                            print(msg)
                            print("        You win")
                        else: 
                            final += [str(i)+':' + 'Computer']
                            computer += 1
                            print(msg)
                            print("        Computer wins")
            else:
                print('''
                        Invalid Input!!
                    DISQUALIFIED! Restart the game 
                    ''')
                cond = False
                break
        # answer_val = [computer,user,tie]
        # print(answers[answer_val.index(max(answer_val))])
        if cond:
            final = print('[',", ".join(final),']')
            print('''
        The final list of wins:''')
            print((f'''{final}'''))
            if computer > user :
                winner = 'computer'
                print(f'''
                    {winner} is the winner
                    Better luck next time

                    ''')
            elif user > computer :
                winner = 'you'
                print(f'''
                    {winner} are the winner!!
                    Congratulations!!

                    ''')
            elif user == computer:
                print('''
                    None of you is a winner, it's a tie!
                    Better luck next time

                    ''')