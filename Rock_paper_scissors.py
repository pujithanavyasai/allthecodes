from random import choice as c
valid_values=['rock', 'paper', 'scissor']
# answers = ['computer', 'user', 'tie']
final = []
times = int(input("How many rounds do you want to play:- "))
computer = 0
user = 0
tie = 0
for i in range(1,times+1):
    cond = True
    value =c(valid_values)
    user_val = input("Enter your value( rock , paper, scissor ):- ").lower()
    msg = 'user:-' + user_val + ' vs ' + 'computer:-' + value
    if user_val in valid_values:
        if value == user_val:
            final += [str(i)+':-' + 'tie']
            tie += 1
            print(msg + ' = tie')
        else:
            li = [user_val , value]
            if ('rock' in li) and ('paper' in li):
                if user_val == 'paper':
                    final += [str(i)+':-' + 'user']
                    user += 1
                    print(msg + ' = user')
                else: 
                    final += [str(i)+':-' + 'computer']
                    computer += 1
                    print(msg + ' = computer')
            elif ('rock' in li) and ('scissor' in li):
                if user_val == 'rock':
                    final += [str(i)+':-' + 'user']
                    user += 1
                    print(msg + ' = user')
                else: 
                    final += [str(i)+':-' + 'computer']
                    computer += 1
                    print(msg + ' =  computer')
            elif ('paper' in li) and ('scissor' in li):
                if user_val == 'scissor':
                    final += [str(i)+':-' + 'user']
                    user += 1
                    print(msg + ' = user')
                else: 
                    final += [str(i)+':-' + 'computer']
                    computer += 1
                    print(msg + ' = computer')
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
    print()
    print("The final list of wins:")
    print(final)
    if computer > user :
        winner = 'computer'
        print('winner is '+ winner + '!!')
        print('Better luck next time')
    elif user > computer :
        winner = 'user'
        print('winner is '+ winner + '!!')  
        print('Congratulations!!')
    elif user == computer:
        print("None of you is a winner, it's a tie!")
        print('Better luck next time')
